import { Layout, Menu, Button, Modal } from 'antd';
import { useState } from 'react';
import ShihtAddedForm from './ShihtAddedForm';
import UpdateForm from './UpdateFormSiht';


const Navbar = ({addItemToDataset, data, updateItemInDataset}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibleUpdate, setIsModalVisibleUpdate] = useState(false);

    const handleCancel = () => {
        setIsModalVisible(false);
      };
    return(
        <Layout>
        <Layout.Header>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key="1"><Button type={'primary'} onClick={() => setIsModalVisible(true)}>Добавить элемент</Button></Menu.Item>
              <Menu.Item key="2"><Button type={'primary'} onClick={() => setIsModalVisibleUpdate(true)}>Обновить элемент</Button></Menu.Item>
            </Menu>
        </Layout.Header>
        <Modal title="Добавление шихт" visible={isModalVisible} onCancel={handleCancel} footer={null}>
            <ShihtAddedForm addItemToDataset={addItemToDataset}/>
        </Modal>
        <Modal title="Обновление данных" visible={isModalVisibleUpdate} onCancel={ () => setIsModalVisibleUpdate(false) } footer={null}>
            <UpdateForm data={data} updateItemInDataset={updateItemInDataset}/>
        </Modal>
        </Layout>
    )
}

export default Navbar