import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';
import EmployeeCreate from './src/components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" titleStyle={{ alignSelf: 'center' }}>
            <Scene 
            key="login" 
            // navTransparent 
            component={LoginForm} 
            title="Please Login" initial 
            />
            <Scene 
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            // rightButtonImage={ require('') }
            key="employeeList" 
            type="replace" 
            // navTransparent 
            component={EmployeeList} 
            title="Employee List" 
            />
             <Scene 
             key="employeeCreate" 
            //  navTransparent 
             component={EmployeeCreate} 
             title="Create Employee" 
             />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
