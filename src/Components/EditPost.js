import React from 'react'
import { Edit, SimpleForm, ReferenceInput, TextInput, SelectInput} from 'react-admin'

export const EditPost = props => (
  <Edit {...props}> 
  <SimpleForm>
  <ReferenceInput source="user-d" reference= "users">
  <SelectInput optionText="id"/>
  </ReferenceInput>
  <TextInput source="id" />
  <TextInput source="title" />
  <TextInput source="body" />
  </SimpleForm>
  </Edit>
);


