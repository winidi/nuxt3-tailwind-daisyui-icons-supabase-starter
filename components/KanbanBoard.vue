<template>
    <kanban-board :stages="stages" />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import KanbanBoard from 'vue-kanban';

  
  const stages = ref([
    {
      id: 1,
      name: 'To Do',
      items: [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }],
    },
    {
      id: 2,
      name: 'In Progress',
      items: [{ id: 3, title: 'Task 3' }],
    },
    {
      id: 3,
      name: 'Done',
      items: [{ id: 4, title: 'Task 4' }],
    },
  ]);
  </script>
  
  