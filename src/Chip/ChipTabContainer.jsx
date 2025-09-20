import React, { useState } from "react";
import "./ChipTabContainer.css";
import Chiptab from "./Chiptab";
import CareerInfoModal from "../Modal/CareerInfoModal.jsx"; 
import { careersData, skillsData, findCareerByTitle } from "../data/skillsDatabase.js"; 

// New: A mapping to link chip labels to the exact career titles in the database
const chipToCareerTitleMap = {
    "Machine Learning": "Machine Learning Engineer",
    "Java Developer": "Backend Developer",
    "Researcher": "AI Research Scientist",
    "Cloud": "Cloud Computing Engineer",
    "Bigdata": "Data Scientist",
    "AI Engineer": "Machine Learning Engineer",
    "UX Designer": "UI/UX Designer",
    "Creative Director": "Marketing Manager",
    "Brand Strategist": "Marketing Manager",
    "Motion Graphics": "Content Creator",
    "Digital Marketing": "Digital Marketing Specialist",
    "Content Creator": "Content Creator",
    "Product Manager": "AI Product Manager",
    "Business Analyst": "Data Analyst",
    "Financial Advisor": "Investment Banker",
    "Operations": "Project Manager",
    "Strategy": "Management Consultant",
    "Team Lead": "Project Manager"
};


const ChipTabContainer = () => {
    const [selectedCareer, setSelectedCareer] = useState(null);

    const chipRows = [
        ["Machine Learning", "Java Developer", "Researcher", "Cloud", "Bigdata", "AI Engineer"],
        ["UX Designer", "Creative Director", "Brand Strategist", "Motion Graphics", "Digital Marketing", "Content Creator"],
        ["Product Manager", "Business Analyst", "Financial Advisor", "Operations", "Strategy", "Team Lead"]
    ];

    const handleChipClick = (chipText) => {
        // New: Use the mapping to get the correct title
        const targetTitle = chipToCareerTitleMap[chipText];
        if (!targetTitle) {
            console.warn(`No mapping found for chip: "${chipText}"`);
            return;
        }

        const foundCareer = findCareerByTitle(targetTitle);

        if (foundCareer) {
            foundCareer.skillsData = skillsData;
            setSelectedCareer(foundCareer);
        } else {
            console.warn(`Career "${targetTitle}" not found in database.`);
        }
    };

    const handleCloseModal = () => {
        setSelectedCareer(null);
    };

    return (
        <div className='cardtab-container'>
            <h1 className='cardtab-container-title'>From Traditional to Emerging - Discover All Possibilities</h1>
            {chipRows.map((row, index) => (
                <Chiptab 
                    key={index}
                    chips={row}
                    onChipClick={handleChipClick}
                />
            ))}

            {selectedCareer && (
                <CareerInfoModal 
                    career={selectedCareer}
                    onClose={handleCloseModal}
                    // New: Pass all career data to the modal for the "Related Careers" lookup
                    careersData={careersData}
                />
            )}
        </div>
    ); 
}

export default ChipTabContainer;