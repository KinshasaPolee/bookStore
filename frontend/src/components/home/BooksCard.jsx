import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from '-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Bookscard = () => {
    return (
        <div classname='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {Bookscard.map((item) => (
                <div
                key={item._id}
                className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
                    <h2 className=''></h2>
                </div>
            ))}
        </div>
    );
};

export default BooksCard