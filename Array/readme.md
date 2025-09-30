# Introduction to Arrays
What Is an Array?
An array is a collection of items (often called elements) stored in a single block of memory. Each item in an array is of the same type (for example, all integers or all strings). Arrays are very common because they allow quick access to elements by using an index.

Key Points
Same Data Type: All elements are of one type (e.g., int, float, string).
Index-Based Access: Each element is accessed by an index, usually starting at 0.
Fixed Position in Memory: Elements are placed in consecutive memory locations, making access by index very fast.

Why Do We Need Arrays?
Arrays offer a simple way to store many similar values using one identifier. For example, if you have five students and you need to record their marks, you could use five separate variables. But as the number of students grows, using individual variables becomes hard to manage. Instead, you can use an array to hold all the marks in one organized structure.

How Arrays Are Stored in Memory
Each element in an array occupies a fixed amount of space in memory, depending on the data type. The position of an element in memory is determined by the base address (starting location of the array) and the index of the element.

Fixed Memory Layout: Since elements are stored in sequence, retrieving an element by index is efficient.
Direct Index Access: We can compute the memory address of any element without scanning through the array.

Static vs. Dynamic Arrays
Arrays can be categorized into static and dynamic types based on whether their size can change during runtime. Understanding the difference between these two helps in choosing the right type for a given problem.

1. Static Arrays
A static array is an array with a fixed size that is defined when it is created. The number of elements cannot be changed after declaration.

Characteristics
Fixed Size: The size is set at the time of declaration and remains unchanged throughout the program.
Memory Allocation: Static arrays are usually allocated on the stack, which makes them efficient in terms of speed.
Efficient Access: Since memory is allocated contiguously, accessing elements is very fast.
No Resizing: If additional space is needed beyond the declared size, a new array must be created and data copied over.

2. Dynamic Arrays
A dynamic array can change its size at runtime, allowing elements to be added or removed as needed.

Characteristics
Resizable: The array can expand when new elements are added and shrink when elements are removed.
Memory Allocation: Dynamic arrays are typically stored on the heap, meaning memory management is more complex.
Performance Trade-offs: While dynamic arrays provide flexibility, resizing them often involves allocating new memory and copying existing elements, which can be expensive in terms of time.
Better Memory Utilization: Since memory is allocated as needed, dynamic arrays reduce waste compared to static arrays.
