import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { TeamFlowContext } from '../ContextApi/AuthContext';


const PrivetRoute = ({ children, allowedRoles }) => {
    const { currentUser } = useContext(TeamFlowContext);

    // Check if the user's role is in the list of allowed roles
    if (currentUser && allowedRoles.includes(currentUser.role.toLowerCase())) {
        return children; // Render the children if the user is authorized
    }

    // Redirect unauthorized users to the error page
    return <Navigate to="/unauthorize" replace />;
};

export default PrivetRoute;



