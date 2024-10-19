import Realm from 'realm';

type SchemaType = {name: string; properties: any};

const getAll = (schemaObj: SchemaType, schema: string) => {
  const realm = new Realm({schema: [schemaObj]});
  let final = JSON.parse(JSON.stringify(realm.objects(schema)));
  realm.close();
  return final;
};

const add = (schemaObj: SchemaType, val: any, schema: string) => {
  const realm = new Realm({schema: [schemaObj]});
  realm.write(() => {
    realm.create(schema, val);
  });
  realm.close();
};

const deleteEntry = (schemaObj: SchemaType, schema: string) => {
  const realm = new Realm({schema: [schemaObj]});
  realm.write(() => {
    // Delete all instances from the realm.
    realm.delete(realm.objects(schema));
  });
  realm.close();
};

const deleteFirstEntry = (schemaObj: SchemaType, schema: string) => {
  const realm = new Realm({schema: [schemaObj]});
  realm.write(() => {
    realm.delete(realm.objects(schema)[0]);
  });
  realm.close();
};

const updateEntry = (schemaObj: SchemaType, schema: string, val: any) => {
  const realm = new Realm({schema: [schemaObj]});
  realm.write(() => {
    const data: any = realm.objects(schema);
    const keys = Object.keys(val);
    keys.forEach(item => {
      data[0][item] = val[item];
    });
  });
  realm.close();
};

export {getAll, add, deleteEntry, updateEntry, deleteFirstEntry};
