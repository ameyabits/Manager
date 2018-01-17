import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends React.Component {
    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps)
    {
      this.createDataSource(nextProps);
    }

    createDataSource({employees}){
      const ds = new ListView.DataSource({
         rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.DataSource = ds.cloneWithRows(employees);
    }

    render() {
        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        );
    }
}

export default connect(null, { employeesFetch })(EmployeeList);
