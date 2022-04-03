import { useEffect, useState } from 'react'
import * as api from '../api/index'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Table, Button, Form, Toast, Container, Row, Col } from 'react-bootstrap'

function ShortME() {
    const [allSUrls, setShortUrls] = useState([])
    const [newUrl, setNewUrl] = useState('')
    //const [lastId, setId] = useState('')


    const getAllShortURLS = async () => {
        const response = await api.getShortUrls();
        setShortUrls(response.data);
    }

    useEffect(() => {
        console.log("useEffect called!!!")
        getAllShortURLS()
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Generate short clicked!" + newUrl)
        await api.createShortUrl(newUrl)
        await getAllShortURLS()
        clear()

    }
    const clear = () => {
        setNewUrl('')
    }

    return (
        <div className="App">
            <Container fluid="md">
                <Row>
                    <Col>
                        <div>
                            <Form>
                                <Form.Control value={newUrl} placeholder="Input URL...." type="text" name="url" onChange={(e) => setNewUrl(e.target.value)} />
                                <Button type="submit" value={newUrl} onClick={handleSubmit}>Generate short</Button>
                            </Form>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Table striped bordered hover variant="light" size="sm">
                                <thead>
                                    <tr>
                                        <th>Short url</th>
                                        <th>Long url</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allSUrls.map((url) =>
                                            <tr key={url._id}>
                                                <td> {url.short}</td>
                                                <td>{url.long}</td>
                                                <td>
                                                    <CopyToClipboard text={"http://localhost:5000/" + url.short}
                                                        onCopy={() => 'http://localhost:5000/' + url.short}

                                                    >
                                                        <Button variant="outline-secondary">Copy to clipboard </Button>
                                                    </CopyToClipboard>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ShortME;