import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFromReducer from './EmployeeFromReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFromReducer
});