let websocketUrl = null
let socket = null

// 在 web worker 中创建一个 WebSocket 客户端
self.onmessage = function (event) {
	websocketUrl = event.data

	// 初始连接
	connectWebSocket()
}

// 建立 WebSocket 连接
function connectWebSocket() {
	socket = new WebSocket(websocketUrl)

	// 处理 WebSocket 连接事件
	socket.onopen = function () {
		console.log('WebSocket 连接已建立')
	}

	// 处理 WebSocket 接收到的消息
	socket.onmessage = function (event) {
		const processedData = handleReceivedData(event.data)
		postMessage(processedData)
	}

	// 处理 WebSocket 关闭事件
	socket.onclose = function () {
		console.log('WebSocket 连接已关闭')
		// 断开后重新连接
		setTimeout(connectWebSocket, 2000)
	}

	// 处理 WebSocket 错误事件
	socket.onerror = function (error) {
		console.error('WebSocket 错误:', error)
		// 出错后重新连接
		setTimeout(connectWebSocket, 2000)
	}
}

// 处理接收到的数据
function handleReceivedData(data) {
	// ...
}
