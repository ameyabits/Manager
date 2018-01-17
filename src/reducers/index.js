import { combineReducers } from 'redux';
import AuthReducer from '../reducers/AuthReducer';
import EmployeeFormReducer from '../reducers/EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';


export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
});
