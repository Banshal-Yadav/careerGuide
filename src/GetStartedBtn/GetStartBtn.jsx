import "./GetStartBtn.css";
import { useNavigate } from "react-router-dom";
function Button() {
    const navigate = useNavigate();
    return (
        <div className="get-started-btn-container">
            <button onCanPlay={() => navigate("/AssessmentPg")} className="get-started-btn">Start Your Assessment</button>
        </div>
    );
}

export default Button;