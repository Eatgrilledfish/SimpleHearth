import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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

export default function InputFileUpload() {
  const [file, setFile] = useState(null);
  // 新状态用于存储预测结果
  const [prediction, setPrediction] = useState('');

  const handleFileChange = async (event) => {
    const uploadedFile = event.target.files[0];
    if (!uploadedFile) {
      alert('No file selected!');
      return;
    }

    const isCsv = uploadedFile.type === "text/csv" || uploadedFile.name.endsWith('.csv');
    const isCorrectName = uploadedFile.name === "energy datasheet.csv";

    if (!isCsv || !isCorrectName) {
      alert('Please select a CSV file named "energy datasheet.csv".');
      return;
    }

    const formData = new FormData();
    formData.append('file', uploadedFile);

    try {
      const response = await fetch('http://3.106.227.168:8000/data/csvupload', { // 注意这里的URL要与你的后端路由匹配
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('File upload failed');
      }

      const result = await response.json();
      // 更新状态以存储预测结果
      setPrediction(result.next_month_prediction);
      console.log('Upload successful:', result);
      // 可以选择以不同方式显示预测结果
      alert(`File uploaded successfully. Next month prediction: ${result.next_month_prediction}`);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed.');
    }
  };

  return (
    <div>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        sx={{ ml: 15 }}
      >
        Upload file
        <VisuallyHiddenInput
          type="file"
          onChange={handleFileChange}
          onClick={(event) => event.stopPropagation()} // 防止触发label的点击事件
        />
      </Button>
      {/* 在组件中显示预测结果 */}
      {prediction && (
        <p style={{ textAlign: 'center', fontSize: '20px' }}>Next month prediction: {prediction}</p>
      )}

    </div>
  );
}
