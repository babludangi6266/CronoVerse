import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { FaRegClock, FaCalendarAlt } from 'react-icons/fa';
import '../../styles/kanban.css';

const KanbanBoard = ({ tasks, onStatusChange, onTaskClick }) => {
  const [columns, setColumns] = useState({
    'Pending': [],
    'In Progress': [],
    'Completed': []
  });

  // Organize tasks into columns whenever the tasks prop changes
  useEffect(() => {
    setColumns({
      'Pending': tasks.filter(t => t.status === 'Pending'),
      'In Progress': tasks.filter(t => t.status === 'In Progress'),
      'Completed': tasks.filter(t => t.status === 'Completed')
    });
  }, [tasks]);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    // Dropped outside a column
    if (!destination) return;

    // Dropped in the same column at the same place
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;

    // Optimistic UI Update (Makes the drag feel instant before API finishes)
    const newColumns = { ...columns };
    const [movedTask] = newColumns[sourceCol].splice(source.index, 1);
    movedTask.status = destCol; // Update status locally
    newColumns[destCol].splice(destination.index, 0, movedTask);
    
    setColumns(newColumns);

    // Call API if the status actually changed
    if (sourceCol !== destCol) {
      onStatusChange(draggableId, destCol);
    }
  };

  const getHeaderClass = (title) => {
    if (title === 'Pending') return 'pending';
    if (title === 'In Progress') return 'progress';
    return 'completed';
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="lexa-crm-board">
        {Object.entries(columns).map(([colId, colTasks]) => (
          <div key={colId} className="lexa-crm-column">
            
            <div className={`lexa-crm-col-header ${getHeaderClass(colId)}`}>
              <span>{colId}</span>
              <span className="lexa-crm-task-count">{colTasks.length}</span>
            </div>

            <Droppable droppableId={colId}>
              {(provided, snapshot) => (
                <div 
                  className={`lexa-crm-droppable-area ${snapshot.isDraggingOver ? 'is-dragging-over' : ''}`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {colTasks.map((task, index) => {
                    const isOverdue = new Date(task.dueDate) < new Date() && task.status !== 'Completed';
                    
                   return (
     <Draggable key={task._id} draggableId={task._id} index={index}>
       {(provided, snapshot) => (
         <div
           className={`lexa-crm-card ${snapshot.isDragging ? 'is-dragging' : ''}`}
           ref={provided.innerRef}
           {...provided.draggableProps}
           {...provided.dragHandleProps}
           onClick={() => onTaskClick && onTaskClick(task)} // <--- ADD THIS LINE
         >
                            <div className="lexa-crm-card-title">{task.title}</div>
                            <div className="lexa-crm-card-desc">{task.description || "No description provided."}</div>
                            
                            <div className="lexa-crm-card-footer">
                              <span className={`lexa-crm-date ${isOverdue ? 'overdue' : ''}`}>
                                {isOverdue ? <FaRegClock /> : <FaCalendarAlt />}
                                {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No Date'}
                              </span>
                              {/* Small status indicator pill inside the card */}
                              <span style={{fontSize: '0.7rem', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', color: '#CBD5E1'}}>
                                {task.frequency || 'One-time'}
                              </span>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;