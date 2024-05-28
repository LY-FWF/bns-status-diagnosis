let websocketUrl = null;
let socket = null;

// 在 web worker 中创建一个 WebSocket 客户端
self.onmessage = function (event) {
  websocketUrl = event.data.env.VITE_WEBSOCKET_URL;

  // 初始连接
  connectWebSocket();
};

async function blobToHexstring(blob) {
	return new Promise((resolve, reject) => {
	  const reader = new FileReader();
	  reader.onloadend = function () {
		if (this.result instanceof ArrayBuffer) {
		  const byteArray = new Uint8Array(this.result);
		  const hexString = Array.from(byteArray).map(byte => byte.toString(16).padStart(2, '0')).join('');
		  resolve(hexString);
		} else {
		  reject(new Error('Invalid result type'));
		}
  
	  };
	  reader.onerror = reject
	  reader.readAsArrayBuffer(blob);
	})
  }
  
  // 使用示例
  async function handleBlobData(blob) {
	try {
	  const hexString = await blobToHexstring(blob);
	  const processedData = handleReceivedData(hexString);
	  postMessage(processedData);
	} catch (error) {
	  console.error(error);
	}
  }

// 建立 WebSocket 连接
function connectWebSocket() {
  socket = new WebSocket(websocketUrl);

  // 处理 WebSocket 连接事件
  socket.onopen = function () {
    console.log("WebSocket 连接已建立");
  };

  // 处理 WebSocket 接收到的消息
  socket.onmessage = function (event) {
    // const processedData = handleReceivedData(event.data);
    // postMessage(processedData);
	handleBlobData(event.data)
  };

  // 处理 WebSocket 关闭事件
  socket.onclose = function () {
    console.log("WebSocket 连接已关闭");
    // 断开后重新连接
    setTimeout(connectWebSocket, 1000);
  };

  // 处理 WebSocket 错误事件
  socket.onerror = function (error) {
    console.error("WebSocket 错误:", error);
    // 出错后重新连接
    setTimeout(connectWebSocket, 1000);
  };
}

// 处理接收到的数据
function handleReceivedData(dataAll) {
	// ...
	var bns = {
		train: 0, carriage: 0, equipment: 0,
		z1105001: "",//B4401无超温K1  
		z1105002: "",//B4401无低温K1  
		z1105003: "",//B4401/2无超温K1  
		z1105004: "",//B4401/2无低温K1  
		z1105005: "",//B4401/2/3无超温K1  
		z1105006: "",//B4401/2/3无低温K1  
		z1105007: "",//B4401/2/3/4无超温K1  
		z1105008: "",//B4401/2/3/4无低温K1   
		z1105009: "",//B4401无超温K2       
		z1105010: "",//B4401无低温K2       
		z1105011: "",//B4401/2无超温K2     
		z1105012: "",//B4401/2无低温K2     
		z1105013: "",//B4401/2/3无超温K2  
		z1105014: "",//B4401/2/3无低温K2  
		z1105015: "",//B4401/2/3/4无超温K2  
		z1105016: "",//B4401/2/3/4无低温K2   
		z1105017: "",//B24无超温K1  z1105024
		z1105018: "",//B24无超温K2  
		z1105019: "",//LB440（铝空电池）已投入状态反馈1  
		z1105020: "",//LB440（铝空电池）已投入状态反馈2  
		z1105021: "",//LB440（铝空电池）已投入状态反馈3  
		z1105022: "",//LB440（铝空电池）已投入状态反馈4  
		z1105023: "",//本节车铝空电池投入控制信号 
		z1105024: "",//外部供电激活控制信号  
		z1105025: "",//无绝缘故障诊断信号N5 
		z1105026: "",//无绝缘故障诊断信号N6 
		z1105027: "",//无绝缘故障诊断信号N7 
		z1105028: "",//无绝缘故障诊断信号N8 
		z1105029: "",//无绝缘故障诊断信号N9
		z1105030: "",//无绝缘故障诊断信号N10 
		z1105031: "", //整车备用电池开关按下  
		z1105032: "",//本车备用电池开关按下  

		z1105033: "",//DC/DC通风机正常诊断信号N5
		z1105034: "",//DC/DC通风机正常诊断信号N6
		z1105035: "",//DC/DC通风机正常诊断信号N7
		z1105036: "",//DC/DC通风机正常诊断信号N8
		z1105037: "",//DC/DC通风机正常诊断信号N9
		z1105038: "",//DC/DC通风机正常诊断信号N10
		z1105039: "",//DC/DC功能正常诊断信号N5
		z1105040: "",//DC/DC功能正常诊断信号N6
		z1105041: "",//DC/DC功能正常诊断信号N7
		z1105042: "",//DC/DC功能正常诊断信号N8
		z1105043: "",//DC/DC功能正常诊断信号N9
		z1105044: "",//DC/DC功能正常诊断信号N10
		z1105045: "",//24V状态诊断信号N6
		z1105046: "",//24V状态诊断信号N8
		z1105047: "",//440V集中断电控制
		z1105048: "",//缓冲启动信号
		z1105049: "",//SA批准,K1           
		z1105050: "",//SA批准,K2
		z1105051: "",//起浮,K1
		z1105052: "",//起浮,K2
		z1105053: "",//上/断电批准,K1
		z1105054: "",//上/断电批准,K2
		z1105055: "",//放行信号
		z1105056: "",//3位角受流靴收回
		z1105057: "",//3位角受流靴伸出
		z1105058: "",//1位角受流靴收回
		z1105059: "",//1位角受流靴伸出
		z1105060: "",//2位角受流靴收回
		z1105061: "",//2位角受流靴伸出
		z1105062: "",//4位角受流靴收回
		z1105063: "",//4位角受流靴伸出
		z1105064: "",//激活EE,K1
		z1105065: "",//激活EE,K2
		z1105066: "",//N1_LS功率开关断开
		z1105067: "",//N2_LS功率开关断开
		z1105068: "",//N3_LS功率开关断开    
		z1105069: "",//N4_LS功率开关断开
		z1105070: "",//DCDC已启动反馈N1
		z1105071: "",//DCDC已启动反馈N2
		z1105072: "",//DCDC已启动反馈N3
		z1105073: "",//DCDC已启动反馈N4
		z1105074: "",//EE已激活K1
		z1105075: "",//EE已激活K2
		z1105076: "",//HS外部供电激活信号通道1
		z1105077: "",//HS外部供电激活信号通道2
		z1105078: "",//关闭电网
		z1105079: "",//紧急功能开按钮按下
		z1105080: "",//关闭本节车电网,K1
		z1105081: "",//OK_440,K1无故障
		z1105082: "",//外部供电已激活诊断1
		z1105083: "",//无强制停车诊断,K1
		z1105084: "",//关闭本节车电网,K2
		z1105085: "",//OK_440,K2无故障
		z1105086: "",//外部供电已激活诊断2
		z1105087: "",//无强制停车诊断,K2

		datatime: 0
	}
	var bns_state = {}
	var data1 = dataAll.toString('hex');
	var data = data1.replaceAll(' ', '')
	console.log(data);
	var buf = dataAll.buffer;
	var unit8 = new Uint8Array(buf);
	var arr = Array.from(unit8);
	var dataTimeStamp =
		"" +
		arr[6] +
		arr[7] +
		arr[8] +
		arr[9] +
		arr[10] +
		arr[11] +
		arr[12] +
		arr[14] +
		arr[15] +
		arr[16] +
		arr[17] +
		arr[18];
	var symple = data.substr(10, 2); //获取报文的标志位字符串，05 BNS   
	console.log(symple);
	switch (symple) {
		case "05":
			bns.train = "CF02"
			bns.carriage = "MC1"
			bns.equipment = "BNS"

			var bns_buffer1 = binarytoarry2(hexto2(data.substr(58, 2)));//提取为二进制,并转换为数组
			bns.z1105001 = bns_buffer1[0]
			bns.z1105002 = bns_buffer1[1]
			bns.z1105003 = bns_buffer1[2]
			bns.z1105004 = bns_buffer1[3]
			bns.z1105005 = bns_buffer1[4]
			bns.z1105006 = bns_buffer1[5]
			bns.z1105007 = bns_buffer1[6]
			bns.z1105008 = bns_buffer1[7]

			var bns_buffer2 = binarytoarry2(hexto2(data.substr(60, 2)));//提取为二进制,并转换为数组
			bns.z1105009 = bns_buffer2[0]
			bns.z1105010 = bns_buffer2[1]
			bns.z1105011 = bns_buffer2[2]
			bns.z1105012 = bns_buffer2[3]
			bns.z1105013 = bns_buffer2[4]
			bns.z1105014 = bns_buffer2[5]
			bns.z1105015 = bns_buffer2[6]
			bns.z1105016 = bns_buffer2[7]

			var bns_buffer3 = binarytoarry2(hexto2(data.substr(62, 2))); //提取为二进制,并转换为数组 bns_buffer3
			bns.z1105017 = bns_buffer3[0]
			bns.z1105018 = bns_buffer3[1]
			bns.z1105019 = bns_buffer3[2]
			bns.z1105020 = bns_buffer3[3]
			bns.z1105021 = bns_buffer3[4]
			bns.z1105022 = bns_buffer3[5]
			bns.z1105023 = bns_buffer3[6]
			bns.z1105024 = bns_buffer3[7]

			var bns_buffer4 = binarytoarry2(hexto2(data.substr(64, 2)));//提取为二进制,并转换为数组 bns_buffer4
			bns.z1105025 = bns_buffer4[0]
			bns.z1105026 = bns_buffer4[1]
			bns.z1105027 = bns_buffer4[2]
			bns.z1105028 = bns_buffer4[3]
			bns.z1105029 = bns_buffer4[4]
			bns.z1105030 = bns_buffer4[5]
			bns.z1105031 = bns_buffer4[6]
			bns.z1105032 = bns_buffer4[7]

			var bns_buffer5 = binarytoarry2(hexto2(data.substr(66, 2)));//提取为二进制,并转换为数组 bns_buffer5
			bns.z1105033 = bns_buffer5[0]
			bns.z1105034 = bns_buffer5[1]
			bns.z1105035 = bns_buffer5[2]
			bns.z1105036 = bns_buffer5[3]
			bns.z1105037 = bns_buffer5[4]
			bns.z1105038 = bns_buffer5[5]

			var bns_buffer6 = binarytoarry2(hexto2(data.substr(68, 2)));//提取为二进制,并转换为数组 bns_buffer6
			bns.z1105039 = bns_buffer6[0]
			bns.z1105040 = bns_buffer6[1]
			bns.z1105041 = bns_buffer6[2]
			bns.z1105042 = bns_buffer6[3]
			bns.z1105043 = bns_buffer6[4]
			bns.z1105044 = bns_buffer6[5]
			var bns_buffer7 = binarytoarry2(hexto2(data.substr(70, 2)));//提取为二进制,并转换为数组 bns_buffer7
			bns.z1105045 = bns_buffer7[0]
			bns.z1105046 = bns_buffer7[1]
			bns.z1105047 = bns_buffer7[2]
			bns.z1105048 = bns_buffer7[4]

			var bns_buffer8 = binarytoarry2(hexto2(data.substr(72, 2)));//提取为二进制,并转换为数组 bns_buffer8
			bns.z1105049 = bns_buffer8[0]
			bns.z1105050 = bns_buffer8[1]
			bns.z1105051 = bns_buffer8[2]
			bns.z1105052 = bns_buffer8[3]
			bns.z1105053 = bns_buffer8[4]
			bns.z1105054 = bns_buffer8[5]
			bns.z1105055 = bns_buffer8[6]

			var bns_buffer9 = binarytoarry2(hexto2(data.substr(74, 2)));//提取为二进制,并转换为数组 bns_buffer9
			bns.z1105056 = bns_buffer9[0]
			bns.z1105057 = bns_buffer9[1]
			bns.z1105058 = bns_buffer9[2]
			bns.z1105061 = bns_buffer9[3]
			bns.z1105060 = bns_buffer9[4]
			bns.z1105059 = bns_buffer9[5]
			bns.z1105062 = bns_buffer9[6]
			bns.z1105063 = bns_buffer9[7]

			var bns_buffer10 = binarytoarry2(hexto2(data.substr(76, 2)));//提取为二进制,并转换为数组 bns_buffer10
			bns.z1105064 = bns_buffer10[0]
			bns.z1105065 = bns_buffer10[1]

			var bns_buffer11 = binarytoarry2(hexto2(data.substr(78, 2)));//提取为二进制,并转换为数组 bns_buffer11
			bns.z1105066 = bns_buffer11[0]
			bns.z1105067 = bns_buffer11[1]
			bns.z1105068 = bns_buffer11[2]
			bns.z1105069 = bns_buffer11[3]
			bns.z1105070 = bns_buffer11[4]
			bns.z1105071 = bns_buffer11[5]
			bns.z1105072 = bns_buffer11[6]
			bns.z1105073 = bns_buffer11[7]

			var bns_buffer12 = binarytoarry2(hexto2(data.substr(80, 2)));//提取为二进制,并转换为数组 bns_buffer12
			bns.z1105074 = bns_buffer12[2]
			bns.z1105075 = bns_buffer12[3]
			bns.z1105076 = bns_buffer12[6]
			bns.z1105077 = bns_buffer12[7]
			var bns_buffer13 = binarytoarry2(hexto2(data.substr(82, 2)));//提取为二进制,并转换为数组 bns_buffer13
			bns.z1105078 = bns_buffer13[0]
			bns.z1105079 = bns_buffer13[1]

			var bns_buffer14 = binarytoarry2(hexto2(data.substr(84, 2)));//提取为二进制,并转换为数组 bns_buffer14
			bns.z1105080 = bns_buffer14[0]
			bns.z1105081 = bns_buffer14[1]
			bns.z1105082 = bns_buffer14[2]
			bns.z1105083 = bns_buffer14[3]

			var bns_buffer15 = binarytoarry2(hexto2(data.substr(86, 2)));//提取为二进制,并转换为数组 bns_buffer15
			bns.z1105084 = bns_buffer15[0]
			bns.z1105085 = bns_buffer15[1]
			bns.z1105086 = bns_buffer15[2]
			bns.z1105087 = bns_buffer15[3]

			bns.datatime = dataTimeStamp
			break
	}
	bns_state['symple'] = symple;
	bns_state['bns'] = bns;

	let str = JSON.stringify(bns_state);
	return str;

	/* 进制转换 */
	function fillZero(ele2String) {
		if (ele2String.length < 8) {
			let zeroNum = 8 - ele2String.length;
			for (let i = 0; i < zeroNum; i++) {
				ele2String = '0' + ele2String;
			}
		}
		return ele2String;
	}
	function hexto2(hex) {//十六进制转2进制
		var hexto2 = fillZero(parseInt(hex, 16).toString(2));
		return hexto2;//十六进制转2进制
	}
	function binarytoarry2(str) {
		var switcharry = new Array();
		var i;
		for (i = 0; i < str.length; i++) {
			switcharry.push(str.charAt(i))
		}
		return switcharry;
		//遍历二进制字符串内容，输出数组
	}
}
