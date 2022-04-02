---
sidebar_position: 1
sidebar_label: ExcelEditor 2022.2.2-213.1
title: What's new in ExcelEditor 2022.2.2-213.1
---

## Preview 

ExcelEditor has updated the SQL search mode, which can query based on multiple conditions at the same time.

![Preview1](https://user-images.githubusercontent.com/28687074/158058906-bf355e85-71cf-475f-9814-5ef5ea98faba.gif)

![Preview2](https://user-images.githubusercontent.com/28687074/158058915-70cec3ec-872c-45a7-aa7d-dd68d735d953.gif)

## Supported Versions

| Plugin Version        | IDE Version                                   |
|:-------------|:----------------------------------------------|
| [2022.2.2-213.1](https://plugins.jetbrains.com/plugin/18663-exceleditor/versions/stable/163301)  | 2021.3 ~ 2021.3.2 |
| [2022.2.2-212.1](https://plugins.jetbrains.com/plugin/18663-exceleditor/versions/stable/163299)  | 2021.2 ~ 2021.2.4 |
| [2022.2.2-211.1](https://plugins.jetbrains.com/plugin/18663-exceleditor/versions/stable/163296)  | 2021.1 ~ 2021.1.3 |
| [2022.2.2-203.1](https://plugins.jetbrains.com/plugin/18663-exceleditor/versions/stable/163293)  | 2020.3 ~ 2020.3.4 |
| [2022.2.2-202.1](https://plugins.jetbrains.com/plugin/18663-exceleditor/versions/stable/163292)  | 2020.2 ~ 2020.2.4 |
| [2022.2.2-201.1](https://plugins.jetbrains.com/plugin/18663-exceleditor/versions/stable/163289)  | 2020.1 ~ 2020.1.4 |

## Usage 

After opening ExcelEditor, press `Alt + Q` or click ![](https://user-images.githubusercontent.com/28687074/158059969-51eeb68c-f0f4-44bb-bcd8-e4413c63fca6.svg) 
in the ExcelEditor toolbar can be turned on.

![](https://user-images.githubusercontent.com/28687074/158205245-821cb56c-9691-44e2-9448-821b1bd5ec21.png)

Press `/` for the first time, all column names of the current table will be displayed. After selecting a column name, 
it will be automatically filled with \column name=\, and then enter
match the value you wanted. If there are multiple conditions, you can 
enter `/` again, and after the auto-fill is complete, enter the matching value you wanted. 
There are more conditions for query the operation remains as above.

After a column has been selected, when you press `/` again, 
it will not appear in the candidate list.