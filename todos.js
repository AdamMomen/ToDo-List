
var todos = [];
var archivedArr = [];
var generateID = makeCounter();

function todoFactory(task) {
  return todos.push({
    task: task,
    complete: false,            // todos always start as incomplete
    id: generateID()            // use generateID to make an ID for this todo
  });
}

function displayTodo(todo) {
  for (var i = 0; i < todos.length; i++) {
    return ('Task Name: '+ todos[i].task)
 //   + 'Task Complete '+ todos[i].complete+'ID: '+todos[i].id+'\n'); 
   }
}

 var myTodoList = makeTodoList(todos);

// makeTodoList accepts an *array* of todo objects as a parameter, and returns
// an object with methods for manipulating todos

function makeTodoList(initialTodos) {

  var highPriorityArr = todos;

function move (from, to) {
  var temp =  todos.splice(to, 1, todos[from]);
    console.log(temp)
      todos.splie(from, 1, temp[0]);
            }
  return {
    display: function() {
      for (var i = 0; i < todos.length; i++) {
        console.log('Task Name: ' + todos[index].task); 
       }

      //this displaying based on priority

      // for (var i = 0; i < highPriorityArr.length; i++) {
      //   console.log("index = " + i + " " +'Task Name: '+ highPriorityArr[i].task + 'Task Complete '+ highPriorityArr[i].complete+' ID: '+ highPriorityArr[i].id+'priority = '+ highPriorityArr[i].priority+'\n');
      //  }
    },
    
    add: function(task, priority) {
    return todos.push({
    task: task,
    complete: false,            // todos always start as incomplete
    id: generateID(),
    priority: priority
       });
    },

    toggleComplete : function (id) {
      return map(todos, function (obj) {
        if (id === obj.id && obj.complete === false) {
          obj.complete =true; 
        } else if(id === obj.id && obj.complete === true) {
          obj.complete =false; 
        }
      })
    },
    remove: function () {
      var tmp=[];

    for (var i = 0; i < todos.length; i++) { 
        if (todos[i].complete == true) {
          console.log('this is the iterator ' + i );
           archivedArr = todos.splice(i,1) ;
        }
      }
      console.log('This is the archived for the reomved items ' + archivedArr);
      return todos ;
    },
    unAcrhive: function (id) {
    for (var i = 0; i < archivedArr.length; i++) {
      console.log('Archived id =' + archivedArr[i])
      if ( archivedArr[i]['id'] === id ) {
        console.log('Archived id =' + archivedArr[i])
       todos.push(archivedArr[i]);
         }
      }   return todos;
    },
    displayArchived: function() {

    for (var i = 0; i < archivedArr.length; i++) {
   console.log('Task Name: '+ archivedArr[i].task + 'Task Complete '+ archivedArr[i].complete+' ID: '+archivedArr[i].id+  'priority = '+ archivedArr[i].priority+'\n');
       }
    }, 
    clearArchived: function() {
      archivedArr = [];
       },
       reorderById: function () {
        for (var i = 0; i < todos.length; i++) {
          for (var j = i; j < todos.length ; j++) {
             if (todos[i].id > todos[j].id) {
              move(i, j);
          }
        }
     }
  },
    move:function  (from, to) {
      var temp =  todos.splice(to, 1, todos[from]);
      console.log(temp)
      todos.splice(from, 1, temp[0]);
       },
    reorderByPriority: function () {
        for (var i = 0; i < highPriorityArr.length; i++) {
          for (var j = i; j < highPriorityArr.length ; j++) {
             if (highPriorityArr[i].priority < highPriorityArr[j].priority) {
              move(i, j);
            }
          }
       }
    },
  }
}
     
  

// =============================================================================
// HELPER FUNCTIONS

function makeCounter() {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}

function each(coll, f) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   f(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   f(coll[key], key); 
             } 
       } 
 } 

  function map(array, f) { 
       var acc = []; 
       each(array, function(element, i) { 
             acc.push(f(element, i)); 
       }); 
       return acc; 
 }


// myTodoList.add('Test1',66);
// myTodoList.add('Test2',21);
// myTodoList.add('Test2',2);
// myTodoList.add('Test1',1);
// myTodoList.add('Test3',2);
// myTodoList.add('Test2',3);
// myTodoList.add('Test3',5);
// myTodoList.add('Test2',100);
// myTodoList.toggleComplete(0);
// myTodoList.toggleComplete(4);
// myTodoList.toggleComplete(2);
// myTodoList.toggleComplete(7);


//      myTodoList.remove();


