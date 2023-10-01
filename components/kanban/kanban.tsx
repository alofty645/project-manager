"use clients";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React, { useState } from "react";

export default function Kanban() {
  const kanbanData = [
    {
      columnTitle: "Column 1",
      tasks: [
        { taskTitle: "Task 1", taskDescription: "Task description 1" },
        { taskTitle: "Task 2", taskDescription: "Task description 2" },
      ],
    },
    {
      columnTitle: "Column 2",
      tasks: [
        { taskTitle: "Task 3", taskDescription: "Task description 3" },
        { taskTitle: "Task 4", taskDescription: "Task description 4" },
      ],
    },
    {
      columnTitle: "Column 3",
      tasks: [
        { taskTitle: "Task 5", taskDescription: "Task description 5" },
        { taskTitle: "Task 6", taskDescription: "Task description 6" },
      ],
    },
  ];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Project Name</h2>
      </div>
      <div className="flex justify-center space-x-10">
        {kanbanData.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="flex flex-col items-center space-y-5"
          >
            <h1>{column.columnTitle}</h1>
            {column.tasks.map((task, taskIndex) => (
              <Card key={taskIndex}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {task.taskTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    {task.taskDescription}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
