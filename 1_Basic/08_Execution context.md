Q1.What is Js Execution Context and how it execute ?
=> Js Execution Context means you create a js file, how will JS will run those code or execute that code. To run those code JS will divide those code in 2 parts.
    * Create Part: When u put some code in 'JS file' at 1st JS  will create a 'Global Execution Context: {}'. And when the 'Global EC' was created that will refers into the 'this- variable'. After that JS will create 2nd of 'Functional Execution Context'.

    *Execute Part: 
        1.JS code file create '{}'
            1st phases: Memory Creation Phase/Creation Phase (variable or declare object allocate in memory spaces it will not execute)
            2nd phases: Execution Phase


Q2.What is Js Execution Context Example ?
=> 
```  javascript
    let val1 = 10;
    let val2 = 5;
    function addNum(num1, num2){
        let total = num1 + num2;
        return total;
    }
    let result1 = addNum(val1, val2);
    let result1 = addNum(10, 2);
```
    step:
        1. At first come to create 'Global Execution Context'
        2. Then create 'Memory Creation Phase' 
            i.  storing value: val1, val2 => undefined (line number 36, 37).
            ii. addNum(): defination of the created function (line number 38 to 41).
            iii.result1: also store as undefined (line number 42).
            iv. result4: also store as undefined (line number 43).
        3. After completing 'Memory Creation Phase' Now the 'Execution Phase' will come it to work
            i.   At 1st it will take the 'val1' and put the value of 10.
            ii.  After it will take the 'val2' and put the value of 5.
            iii. In the 'addNum()' function the 'Execution Phase' will not work because there is nothing to add.
            iv.  When it reach the line number 42 and find the 'addNum()' it will create another 'Execution Context', here will create 
                1.  a new variable enviornment (now it will also create a new 'Memory Creation Phase'), 
                    1. val1, val2, total => undefined
                2. execution thread (now it will also create a new 'Execution Phase') 
                    2. num1 = 10, num2 = 5, total = 15 .
                    3. now the total value will go to the parent Global Execution Context'. 
                    4. after completing the execution the new 'Execution Phase'(iv.1.2) will be deleted.
            v.  Now the 'result' value will be 15
            vi  In line number 43 it also proceed just like line number 42  
