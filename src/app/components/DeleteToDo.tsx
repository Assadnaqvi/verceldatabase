const handleDelete = async () => {
    try {
      if (task) {
        const res = await fetch('api/todo', {
          method: 'DELETE',
          body: JSON.stringify({
            task: task.task,
          }),
        });
  
        refresh();
      }
    } catch (error) {
      console.log('error');
    }
  };
  