import React, { useContext } from 'react';

// Socket
import { SocketContext } from '../context/SocketContext';
// Form
import { useForm } from '../hooks/useForm';

export const AddPlace = () => {

    const {socket} = useContext(SocketContext);

     // add
    const add_place = (name, description) => {
        socket.emit('place-add', name, description)
    }

    const [values, handleInputChange, reset] = useForm({
        name: '',
        description: ''
    });

    const { name, description } = values;

    const onSubmit = (e) => {
        e.preventDefault();

        add_place(name, description);

        reset();
    }

    return (


        <form onSubmit={onSubmit} >
            <div className='form-control container-add-place mt-3 '>

                <div className='title-and-name-input justify-content-around mb-2 '>
                    <h3>Add place</h3>
                    <input

                        placeholder='name'
                        name='name'
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>


                <textarea

                    className='form-control mb-2'
                    name='description'
                    placeholder='Description place'
                    value={description}
                    onChange={handleInputChange}
                >
                </textarea>

                <button className='btn btn-primary'>
                    Add
                </button>
            </div>

        </form>
    )
}
