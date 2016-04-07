import d3 from 'd3'
import topojson from 'topojson';
import { spaceData, spaceProjection } from './hex-data';
import backgrounds from './hex-backgrounds';
import assets from './hex-assets';

class Grid {

    constructor(opt, props) {
        this.space = {};
        this.target = opt.target;
        this.width = opt.width;
        this.height = opt.height;
        this.radius = opt.radius;
        this.props = props;
        this.data = spaceData(this.radius, this.width, this.height);
        this.projection = spaceProjection(this.radius);
        this.path = d3.geo.path().projection(this.projection);
    }

    indexByID(d) {
        return d.id;
    }

    /**
    * Assets
    */

    mapAssets(data) {
        return data.filter((item) => {
            return _.has(item,'asset');
        });
    }

    createAssets (data) {
        const d3Element = d3.select(this.target)
            .append("div")
            .attr("class","assets")
            .selectAll("div")
            .data(data,this.indexByID);
        this.updateAssets(d3Element);
    }

    updateAssets (d3Element) {

        function offsetToPixel (x,y) {
            var dx = 22 * 2 * Math.sin(Math.PI / 3) * (x - 1),
                    dy = 22 * 1.5 * (y - 2);
            if(y % 2 !== 0){
                dx = dx - (22 * Math.sin(Math.PI / 3));
            }
            return {
                dx : dx,
                dy : dy
            };
        }

        function transformRotate (rotate,id) {
            if (id.indexOf('ship') === -1) {
                rotate = 0;
            }
            return rotate;
        }

        d3Element
            .enter().append("div")
            .attr("class",function (d) {
                return d.asset.id;
            })
            .attr("data-offset",function(d) {
                return d.offset;
            });

        d3Element.attr("style",function(d) {
            var pos = offsetToPixel(d.offset[0], d.offset[1]);
            var rotate = transformRotate(d.rotate, d.asset.id);
            return "top:" + pos.dy + "px;left:" + pos.dx + "px; transform : rotate(" + rotate + "deg)";
        });

        // EXIT
        d3Element.exit().remove();
    }

    /**
    * Backgrounds
    */

    mapBackgrounds (data) {
        return data.filter((item) => {
            return _.has(item,'tile');
        });
    }

    updateBackground (d3Element, data) {

        if(!data) return;

        const self = this;

        return d3Element
            .attr("d", (d) => { 
                return self.path(topojson.feature(data, d));
            })
            .attr("class", (d) => {
                if (d.offset[1] < 2 || d.offset[0] === 0 || d.offset[1] === 24 || d.offset[0] >= 26) {
                    return 'out-of-bounds';
                } else{
                    return d.tile ? d.tile.id : '';
                }
            })
            .attr("data-id", (d) => {
                return d.id;
            })
            .attr("data-offset", (d) => {
                return d.offset;
            })
            .on("mousedown", this.leftClick.bind(this))
            .on('contextmenu', this.rightClick.bind(this));
    }

    createBackground (data) {
        var d3Element = this.space.append("g")
            .attr("class", "hexagon")
            .selectAll("path")
            .data(data.objects.hexagons.geometries,this.indexByID)
            .enter().append("path");
        this.updateBackground(d3Element, data);
    }

    /**
    * Ancillary Rendering
    */

    createMesh (data) {
        this.space.append("path")
            .datum(topojson.mesh(data, data.objects.hexagons))
            .attr("class", "mesh")
            .attr("d", this.path);
    }

    createZoomRect () {
        const zoom = d3.behavior.zoom()
            .translate([0, 0])
            .scale(1)
            .scaleExtent([1, 8])
            .on("zoom", this.zoomed);
        this.space.append("rect")
            .attr("class", "overlay")
            .attr("width", this.width)
            .attr("height", this.height)
            .call(this.zoom);
    }

    zoomed() {
        this.space.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    /**
    * Binding
    */

    assetManipulation (d,asset) {
        if(_.has(d,'asset')){
            d.rotate = ((d.rotate + 60) > 360) ? 30 : d.rotate + 60;
        } else {
            d.asset = asset;
            d.rotate = 30;
        }
        return d;
    }

    backgroundManipulation (d,background) {
        d.tile = background;
        return d;
    }

    leftClick(d) {
        d3.event.preventDefault();
        if(this.props.selected.type === 'assets') {
            d = this.assetManipulation(d,this.props.selected);
        }
        if(this.props.selected.type === 'backgrounds') {
            d = this.backgroundManipulation(d,this.props.selected);
        }
        this.update(d);
    }

    rightClick(d) {
        d3.event.preventDefault();
        delete d.tile;
        delete d.asset;
        this.update(d);
    }

    update (d) {
        const newData = this.data.objects.hexagons.geometries.map((item) => {
            if (item.id === d.id) {
                return d;
            }
            return item;
        });

        const d3BackgroundElement = d3.select('.hexagon').selectAll('path').data(this.mapBackgrounds(newData),this.indexByID);
        this.updateBackground(d3BackgroundElement,this.data);

        const d3AssetElement = d3.select('.assets').selectAll('div').data(this.mapAssets(newData),this.indexByID);
        this.updateAssets(d3AssetElement);
    }

    updateSelected (props) {
        this.props = props;
    };

    createGrid () {

        var svg = d3.select(this.target).append("svg")
            .attr("width", this.width)
            .attr("height", this.height);

        this.space = svg.append("g")
            .attr("class","space")
            .attr("width", this.width)
            .attr("height", this.height);

        //Backgrounds of space
        this.createBackground(this.data);

        //Assets of space
        this.createAssets(this.mapAssets(this.data.objects.hexagons.geometries));

        //Mesh of space
        this.createMesh(this.data);

        //Zoom Area
        //createZoomRect();

    }

}

export default Grid;