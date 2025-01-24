data = {name: 'John', age: 30}
const random6number = Math.random().toString().substring(2,8)

const body = `
    <table>
        <tr>
            <td>${data.name}</td>
            <td>${data.age}</td>
            <td>${new Date().toDateString()}</td>
            <td>${random6number}</td>
            <td>${Math.random()}</td>
        </tr>
    </table>`

console.log(body);  