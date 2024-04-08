import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios'; // 确保已安装axios

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload({onUploadSuccess}) {
  const [report, setReport] = useState(''); // 添加一个状态来存储报告内容

  const handleUpload = async (event) => {
    const file = event.target.files[0]; // 从事件对象中提取文件
    if (!file) {
      alert('No file selected');
      return;
    }
    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const dataUrl = loadEvent.target.result;
      onUploadSuccess(dataUrl); // 使用传入的回调函数代替 setImagePreviewUrl
    };

    reader.readAsDataURL(file);

    // 文件上传到服务器部分
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/data/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Uploaded file URL:', response.data.url); // 这里可能不再需要，除非你还想显示URL
      setReport(response.data.report); // 使用返回的报告内容更新状态
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput
          type="file"
          onChange={handleUpload} // 添加事件处理程序来处理文件上传
        />
      </Button>
      {report && <div style={{ marginTop: '20px' }}>Report: {report}</div>} {/* 显示报告内容 */}
    </div>
  );
}
