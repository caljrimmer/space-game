const low = require('lowdb');
const storage = ('lowdb/browser');
const db = low('../../db/db.json', { storage });

export default function lowDBMiddleware() {
    return next => action => {
        const { value, type, store } = action;
        if (store) {

            if (type.includes('_PUT')) {
                //PUT
                db(store)
                    .chain()
                    .find({id: value.id})
                    .assign(value)
                    .value();
            } else if (type.includes('_POST')) {
                //POST
                db(store).push(value);
            } else {
                //DELETE
                db(store).remove({id: value.id});
            }

            if (type.includes('_GET_ID')) {
                action.value = db(store).find({id: value.id})
            } else {
                action.value = db(store).cloneDeep();
            }

            action.value = db(store).cloneDeep();

        }
        return next(action);
    }
}