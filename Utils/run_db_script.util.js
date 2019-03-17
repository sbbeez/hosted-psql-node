const queries = [
    `create table users(user_id int primary key)`,
    `create table user_notification(user_id int references users(user_id), instance_id varchar(1000));`
];

const init = async () => {
    for (let i = 0; i < queries.length; i++) { 
        let query = queries[i];
        await require("../Utils/dbConnection.utils").executeQuery(query);
    }
}

init();