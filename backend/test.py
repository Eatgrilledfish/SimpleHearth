import numpy as np
import pandas as pd
file_path = "/Users/jianqiao/myproject/SimpleHearth/backend/energy datasheet.csv"
dataset = pd.read_csv(file_path, usecols=[0, 1], low_memory=False)

# 计算3个月滚动平均值
rolling_mean = dataset['Amount'].rolling(window=3).mean()

# 获取最后一个滚动平均值作为下一个月的预测值
next_month_prediction = round(rolling_mean.iloc[-1],2)

print(next_month_prediction)