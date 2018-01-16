import { combineReducers } from 'redux';
import AuthReducer from '../reducers/AuthReducer';
import EmployeeFormReducer from '../reducers/EmployeeFormReducer';


export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});
