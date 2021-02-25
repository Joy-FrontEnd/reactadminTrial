import React from 'react'
import { Filter, ReferenceInput, TextInput, SelectInput} from "react-admin"

export const FilterPost = props => (
  <Filter {...props}>
    <TextInput lable="Search Post" source="q" alwaysOn/>
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>

)


