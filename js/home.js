window.addEventListener('DOMContentLoaded',(even) => {
    createInnerHtml();
    });
    const createInnerHtml=() =>{
        const innerHtml=`
        <tr>
            <th>Full Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Phone Number</th>
        </tr>
        <tr>
                <td>Robins Chandna</td>
                <td>vijay nagar</td>
                <td>Ghaziabad</td>
                <td>uttar pradesh</td>
                <td>201009</td>
                <td>+919871622190</td>
                <td>
                <img id="1" onclick="remove(this)" alt="delete" src="\assets\image\delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit" src="\assets\image\create-black-18dp.svg">
            </td>
        </tr>
        `;
        document.querySelector('#display').innerHTML=innerHtml;
    } 