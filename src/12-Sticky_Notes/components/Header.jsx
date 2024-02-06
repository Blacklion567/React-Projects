import StickyPic from '../public/sticky-note-logo.png';
import { useStickyNotes } from '../context/StickyNotesContext';
import { PlusSvgIcon } from './SvgIcons';
import "./Header.css";

const Header = () => {
    const { addNewNote } = useStickyNotes();

    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={StickyPic} alt="Sticky Notes Logo" width={45} />
                <h1 className='app-name'>Sticky Notes</h1>
            </div>
            <button className='new-button' onClick={addNewNote}>
                <PlusSvgIcon />
                Add new note
            </button>
        </div>
    );
};

export default Header;
