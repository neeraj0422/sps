import React from 'react';
import { IoMdSchool } from 'react-icons/io';

const LibrarySectionCard = ({ title, description, handleClick }) => {
    return (
        <div className="library-section-card" onClick={() => handleClick(title)}>
            <IoMdSchool />
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Learn More</button>
        </div>
    );
};

const LibraryPage = ({ handleClick }) => {
    return (
        <div className="library-page">
            <h1>Library</h1>
            <div className="library-sections-list">
                <LibrarySectionCard
                    title="Fiction Section"
                    description="Explore our collection of fictional works, including novels, short stories, and poetry."
                    handleClick={handleClick}
                />
                <LibrarySectionCard
                    title="Non-Fiction Section"
                    description="Browse our extensive selection of non-fiction books covering various topics such as history, science, and biography."
                    handleClick={handleClick}
                />
                <LibrarySectionCard
                    title="Reference Section"
                    description="Access reference materials such as dictionaries, encyclopedias, and atlases to support your research and studies."
                    handleClick={handleClick}
                />
                <LibrarySectionCard
                    title="Digital Resources"
                    description="Utilize our online databases, e-books, and academic journals for additional learning and research."
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};

export default LibraryPage;
