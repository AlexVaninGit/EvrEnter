import {Button, Form, Input, Select} from 'antd'
import { useState } from 'react'




const ShihtAddedForm = ({addItemToDataset}) => {
    const [number, setNumber] = useState(0)
    const [lable, setLable] = useState('')
    const [colors, setColor] = useState('')




    return(
        <Form>
            <Form.Item
              label="Название шихты"
              name="shihtname"
              rules={[{ required: true, message: 'Введите название' }]}
            >
              <Input value={lable} onChange={e=> setLable(e.target.value)}/>
            </Form.Item>
            <Form.Item
              label="Данные 21.1/22.4/23.1/33"
              name="data"
              rules={[{ required: true, message: 'Заполните данные' }]}
            >
              <Input value = {number} onChange={e => setNumber(e.target.value) } />

            </Form.Item>
            <Form.Item>
            <Select onChange={color => setColor(color)}>
                <Select.Option value='red'>red</Select.Option>
                <Select.Option value='green'>green</Select.Option>
                <Select.Option value='black'>black</Select.Option>

            </Select>
            </Form.Item>
            <Button onClick={() => {
              try {
                if(!Array.isArray(number.split('/'))){
                  alert('Введите данные корректно')
                  throw new Error('Введите данные корректно')
                }
                addItemToDataset(lable, number.split('/').map( i => +i ), colors)
              } catch (error) {
                console.log(error);
              }
            }}>Добавить</Button>
        </Form>
    )
}

export default ShihtAddedForm