// // const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

// // function FruitList() {
// //     return (
// //         <ul>
// //             {fruits.map((fruit) => (
// //                 <li>{fruit}</li>
// //             ))}
// //         </ul>
// //     );
// // }


// export default FruitList;
// const users = [
//     { id: 1, name: 'Boburjon' , age:15 },
//     { id: 2, name: 'Diyorbek' , age: 14},
//     { id: 3, name: 'Mirziyo' , age: 13},
// ];
// function UserList() {
//     const kattalar = users.filter(user => user.id >=15);
//     return (
//         <ul>
//             {kattalar.map((user) => <li key={user.id}>{user.name}</li>)}
//         </ul>
//     );
// }
// export default UserList;
// import { useState } from "react";
// function FruitList() {
//     const [items, setFruits] = useState(['Apple', 'Banana']);
//     const additems=()=>{
//         setFruits([...items,'Cherry']);
//     }
//     return (
//         <div>
//             <button onClick={additems}>Add Fruit</button>
//             <ul>
//                 {items.map((item, index) => <li key={index}>
//                     {item} 
//                 </li> }
//             </ul>
//         </div>
//     )
// }
// export default FruitList;
// import { useState } from "react";

// function FruitList() {
//     // Mevalar massivini obyekt ko'rinishida saqlash yaxshiroq (ID bilan)
//     const [items, setFruits] = useState([
//         { id: 1, name: 'Apple' },
//         { id: 2, name: 'Banana' }
//     ]);

//     const addItems = () => {
//         const newFruit = {
//             id: Date.now(), // Noyob ID yaratish uchun vaqtdan foydalanamiz
//             name: 'Cherry'
//         };
//         setFruits([...items, newFruit]);
//     };

//     return (
//         <div>
//             <button onClick={addItems}>Add Fruit</button>
//             <ul>
//                 {items.map((item) => (
//                     // Index o'rniga noyob ID dan foydalanamiz
//                     <li key={item.id}>
//                         {item.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default FruitList;
import { useState } from "react";

function FruitList() {
    // 1. Mevalar ro'yxati uchun state
    const [items, setFruits] = useState(['Apple', 'Banana']);
    
    // 2. Inputga yozilayotgan matnni ushlab turish uchun state
    const [inputValue, setInputValue] = useState("");

    const addItems = () => {
        // Agar input bo'sh bo'lsa, hech narsa qo'shmaymiz
        if (inputValue.trim() !== "") {
            setFruits([...items, inputValue]); // Yangi mevani massivga qo'shish
            setInputValue(""); // Inputni tozalash
        }
    };
    const Clear = () => {
        setFruits([]); // Mevalar ro'yxatini tozalash
    }

    return (
        <div style={{ padding: "20px" }}>
            <h3>Mening mevalarim:</h3>
            
            {/* Input maydoni */}
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Meva nomini yozing..."
            />
            
            <button onClick={addItems}>Qo'shish</button>
            <button onClick={Clear}>Tozalash</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item} 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FruitList;