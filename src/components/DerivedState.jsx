import { useState } from "react"

export const DerivedState = () => {
     const [users, setUsers] = useState(
        [
            {name: "sandeep", age: 24},
            {name: "pradeep", age: 27},
            {name: "mandeep", age: 29},
        ]
     );
        console.log(users);
        const userCount = users.length;
        const averageAge =
        users.reduce((prev, curr) => prev + curr.age, 0) / userCount;
        console.log(`user length: ${userCount}, total avg: ${averageAge}`);
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - {user.age} years old
                    </li>
                ))}
            </ul>
            <p>total users: {userCount}</p>
            <p>average age: {averageAge}</p>
        </div>
    )
};