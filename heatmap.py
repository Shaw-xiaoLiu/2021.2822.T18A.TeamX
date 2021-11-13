import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv(r"D:\INFS2822\INFS2822TeamX_Group_Assignment\criteria.csv")
print(df.head(15))

suburb = ((np.asarray(df['Suburb'])).reshape(4,4))
proportion = ((np.asarray(df['CriteriaProportion'])).reshape(4,4))

# print(suburb)

result = df.pivot(index='Yrows', columns='Xcols', values='CriteriaProportion')
# print(result)

labels = (np.asarray(["{0} \n {1:.2f}".format(symb,value)
                      for symb, value in zip(suburb.flatten(),proportion.flatten())])).reshape(4,4)

fig, ax = plt.subplots(figsize=(12, 7))

title = "Sydney inner city suburb heatmap"

plt.title(title, fontsize=18)
ttl = ax.title
ttl.set_position([0.5, 1.05])
ax.set_xticks([])
ax.set_yticks([])

ax.axis('off')

sns.heatmap(result,annot=labels,fmt="",cmap='RdYlGn',linewidths=0.30,ax=ax)
plt.show()