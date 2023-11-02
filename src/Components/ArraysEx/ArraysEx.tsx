import React, { useState } from "react"
import "./ArraysEx.css"
import { Pet, Color } from "../../../utils/interfaces"

const ArraysEx: React.FC = () => {
    const [colors, setColors] = useState<Color>({ colors: ["orange", "purple", "white"] })
    const addColor = (color: string): void => {
        setColors(prevState => ({
            colors: [...prevState.colors, color]
        }))    
    }
    const [pets, setPets] = useState<Pet[]>([
        { name: "Mac", type: "Dog", id: 1 },
        { name: "Chester", type: "Cat", id: 2 },
        { name: "Pawlie", type: "Dog", id: 3 }
    ])
    const deletePet = (index: number): void => {
        const updatedPets = [...pets]
        updatedPets.splice(index, 1)
        setPets(updatedPets)
    }

    return (
        <div>
            <div className="colors">
                <div className="color-list">
                    <h1>
                        Colors
                    </h1>
                    <button onClick={() => addColor("orange")}>Add Orange</button>
                    <button onClick={() => addColor("purple")}>Add Purple</button>
                    <button onClick={() => addColor("white")}>Add White</button>
                    <ol>
                        {colors.colors.map((color, i) => 
                        <li
                            key={i}>{color}
                        </li>
                        )}
                    </ol>
                </div>
            </div>
            <div className="pets">
                <h1>
                    Pets
                </h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Type
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {pets.map((pet, index) => (
                        <tr
                            key={pet.id}>
                                <td>
                                    {pet.name}
                                </td>
                                <td>
                                    {pet.type}
                                </td>
                                <td>
                                    <button onClick={() => deletePet(index)}>Delete</button>
                                </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ArraysEx