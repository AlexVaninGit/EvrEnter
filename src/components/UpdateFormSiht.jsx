import {Button, Form, Input, Select} from 'antd'
import { useState } from 'react'
import { TimePicker, DatePicker } from 'antd';
import { formatDate, formatTime } from '../utils/date';




const UpdateForm = ({updateItemInDataset, data}) => {
    const [number, setNumber] = useState(0)
    const [lable, setLable] = useState('')
    const [date, setDate] = useState({
      selectDate: '',
      selectTime: ''
    })
    const [name, setName] = useState('')

    const format = 'HH:mm';
    const selectDate = (date) => {
      console.log(formatDate(date.toDate()));
      setDate({...date, selectDate:formatDate(date.toDate()) })
    }
    const selectTime = (time) => {
      setDate({...date, selectTime:formatTime(time.toDate()) })
    }

    return(
        <Form>
            <Form.Item>
            <Select onChange= {(name) => setName(name)}>
                    {
                        data.datasets.map( (name) => <Select.Option value={name.label}>{name.label}</Select.Option> )
                    }
                </Select>
            </Form.Item>
            <Form.Item
              label="Название шихты"
              name="shihtname"
              rules={[{ required: false, message: 'Введите название' }]}
            >
              <Input value={lable} onChange={e=> setLable(e.target.value)}/>
            </Form.Item>
            <Form.Item
              label="Данные 21.1/22.4/23.1/33"
              name="data"
              rules={[{ required: true, message: 'Заполните данные' }]}
            >
              <Input type="number" value = {number} onChange={e => setNumber(e.target.value) } />

            </Form.Item>
            <Form.Item
              label="Время"
              name="time"
              rules={[{ required: true, message: 'Выберите время' }]}
            >
            <TimePicker format={format} onChange={ (time) =>  selectTime(time)} />
            </Form.Item>

            <Form.Item
                label="Event date"
                name="eventdate"
                rules={[{ required: true, message: 'Выберите дату'}]}
            >
                <DatePicker onChange={(date) => selectDate(date)}/>
            </Form.Item>


            <Button onClick={() => {
              console.log(`${date.selectDate} ${date.selectTime}`);
              updateItemInDataset(`${date.selectDate} ${date.selectTime}`, name, number,lable )
            }}>Добавить</Button>
        </Form>
    )
}

export default UpdateForm