import { Button, Col, Container, Form, Row, Tabs, Tab, Table } from "react-bootstrap"

const ShipmentEdit = () => {
	return (
		<div>
			<Container>
				<div className='mt-2'>
                        <Button className='ms-3' variant="secondary">Back</Button>
                        <Button className='ms-3' variant="secondary">Save</Button>
                        <Button className='ms-3' variant="secondary">Send EDI</Button>
                        <Button className='ms-3' variant="secondary">EDI History</Button>
                        <Button className='ms-3' variant="secondary">Delete</Button>
                </div>
				<Tabs
					defaultActiveKey="profile"
					id="uncontrolled-tab-example"
					className="mb-3 mt-3"
				>
					<Tab eventKey="basic" title="Basic">
						<Container>
                		    <Row>
                		        <Col xs={3}>
                		            <Form.Label>AWB番号</Form.Label>
                		            <Form.Control disabled/>
                		        </Col>
                		    </Row>
                		    <Row>
                		        <Col xs={3}>
                		            <Form.Label htmlFor="origin">仕出空港</Form.Label>
                		            <Form.Control id="origin" />
                		        </Col>
                		        <Col xs={3}>
                		            <Form.Label htmlFor="destination">仕向空港</Form.Label>
                		            <Form.Control id="destination" />
                		        </Col>
                		    </Row>
                		</Container>
					</Tab>
					<Tab eventKey="parties" title="Parties">
						<Container>
							<Row>
								<Col xs={3}>
									<Form.Label>航空会社コード</Form.Label>
									<Form.Control/>
								</Col>
								<Col xs={3}>
									<Form.Label>航空会社名</Form.Label>
									<Form.Control/>
								</Col>
								<Col xs={3}>
									<Form.Label>2 レターコード</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3}>
									<Form.Label>輸出法人コード</Form.Label>
									<Form.Control/>
								</Col>
								<Col xs={3}>
									<Form.Label>輸出法人名</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3}>
									<Form.Label>輸出法人住所コード</Form.Label>
									<Form.Control/>
								</Col>
								<Col xs={3}>
									<Form.Label>国</Form.Label>
									<Form.Control/>
								</Col>
								<Col xs={3}>
									<Form.Label>受取人名</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3} />
								<Col xs={3}>
									<Form.Label>郵便番号</Form.Label>
									<Form.Control/>
								</Col>
								<Col xs={3}>
									<Form.Label>電話番号</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3} />
								<Col xs={3}>
									<Form.Label>州 / 都道府県</Form.Label>
									<Form.Control/>
								</Col>
								<Col xs={3}>
									<Form.Label>メールアドレス</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3} />
								<Col xs={3}>
									<Form.Label>市町村</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3} />
								<Col xs={3}>
									<Form.Label>住所1</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3} />
								<Col xs={3}>
									<Form.Label>住所2</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3} />
								<Col xs={3}>
									<Form.Label>住所3</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3}>
									<Form.Label>輸入法人コード</Form.Label>
									<Form.Control/>
								</Col>
								<Col xs={3}>
									<Form.Label>輸入法人名</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3}>
									<Form.Label>輸入法人住所コード</Form.Label>
									<Form.Control/>
								</Col>
								<Col xs={3}>
									<Form.Label>国</Form.Label>
									<Form.Control/>
								</Col>
								<Col xs={3}>
									<Form.Label>受取人名</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3} />
								<Col xs={3}>
									<Form.Label>郵便番号</Form.Label>
									<Form.Control/>
								</Col>
								<Col xs={3}>
									<Form.Label>電話番号</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3} />
								<Col xs={3}>
									<Form.Label>州 / 都道府県</Form.Label>
									<Form.Control/>
								</Col>
								<Col xs={3}>
									<Form.Label>メールアドレス</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3} />
								<Col xs={3}>
									<Form.Label>市町村</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3} />
								<Col xs={3}>
									<Form.Label>住所1</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3} />
								<Col xs={3}>
									<Form.Label>住所2</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
							<Row>
								<Col xs={3} />
								<Col xs={3}>
									<Form.Label>住所3</Form.Label>
									<Form.Control/>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey="routings" title="Routings">
						<Container>
							<Table striped bordered hover>
								<thead>
									<tr>
        								<th>#</th>
        								<th>航空会社</th>
        								<th>フライト番号</th>
        								<th>出発空港</th>
										<th>出発時刻</th>
										<th>到着空港</th>
										<th>到着時刻</th>
        							</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</Table>
						</Container>
					</Tab>
					<Tab eventKey="goods" title="Goods">
						<Container>
							<Row>
                		        <Col xs={3}>
                		            <Form.Label>総個数</Form.Label>
                		            <Form.Control disabled/>
                		        </Col>
								<Col xs={3}>
                		            <Form.Label>総重量</Form.Label>
                		            <Form.Control disabled/>
                		        </Col>
                		    </Row>
							<Table striped bordered hover className='mt-4'>
								<thead>
									<tr>
        								<th>#</th>
        								<th>品名</th>
        								<th>数量</th>
        								<th>重量</th>
										<th>原産国</th>
										<th>HSコード</th>
        							</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</Table>
							<Table striped bordered hover className='mt-4'>
								<thead>
									<tr>
        								<th>取り扱い情報コード</th>
        								<th>取り扱い情報テキスト</th>
        							</tr>
								</thead>
								<tbody>
									<tr>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</Table>
						</Container>
					</Tab>
					<Tab eventKey="charges" title="Charges">
						<Container>
							<Row>
                		        <Col xs={3}>
                		            <Form.Label>通貨</Form.Label>
                		            <Form.Control />
                		        </Col>
                		    </Row>
							<Table striped bordered hover className='mt-4'>
								<thead>
									<tr>
        								<th>費用コード</th>
        								<th>費用名</th>
										<th>金額</th>
        							</tr>
								</thead>
								<tbody>
									<tr>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</Table>
							<Table striped bordered hover className='mt-4'>
								<thead>
									<tr>
        								<th>申告価格タイプ</th>
        								<th>申告価格</th>
        							</tr>
								</thead>
								<tbody>
									<tr>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</Table>
						</Container>
					</Tab>
				</Tabs>
			</Container>
		</div>
	)
}

export default ShipmentEdit