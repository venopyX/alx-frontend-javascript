# 0x03. ES6 Data Manipulation

## Overview

This project focuses on ES6 data manipulation techniques in JavaScript. It covers advanced array operations, typed arrays, and ES6 data structures like Set, Map, and WeakMap.

## Project Information

- **Language**: JavaScript (ES6)
- **Weight**: 1
- **Project Duration**: Apr 22, 2025, 6:00 AM to Apr 24, 2025, 6:00 AM
- **Checker Release**: Apr 22, 2025, 6:00 PM
- **Auto Review**: Will be launched at the deadline

## Resources

Read or watch:

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## Learning Objectives

By the end of this project, you should be able to explain:

- How to use map, filter, and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file at the root of the project folder is mandatory
- Code should use the .js extension
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- All functions must be exported

## Setup Instructions

### Install NodeJS 12.11.x

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify installation:

```bash
nodejs -v  # Should output v12.11.1
npm -v     # Should output 6.11.3
```

### Install Project Dependencies

```bash
npm install
```

## Tasks

### 0. Basic list of objects

- Create a function `getListStudents` that returns an array of student objects
- Each object has: id (Number), firstName (String), and location (String)
- File: `0-get_list_students.js`

### 1. More mapping

- Create a function `getListStudentIds` that returns an array of ids from a list of objects
- Use the map function on the array
- File: `1-get_list_student_ids.js`

### 2. Filter

- Create a function `getStudentsByLocation` that returns students located in a specific city
- Use the filter function on the array
- File: `2-get_students_by_loc.js`

### 3. Reduce

- Create a function `getStudentIdsSum` that returns the sum of all student ids
- Use the reduce function on the array
- File: `3-get_ids_sum.js`

### 4. Combine

- Create a function `updateStudentGradeByCity` that returns students with new grades
- Use filter and map combined
- File: `4-update_grade_by_city.js`

### 5. Typed Arrays

- Create a function `createInt8TypedArray` that returns a new ArrayBuffer with Int8 value
- File: `5-typed_arrays.js`

### 6. Set data structure

- Create a function `setFromArray` that returns a Set from an array
- File: `6-set.js`

### 7. More set data structure

- Create a function `hasValuesFromArray` that checks if elements exist within a Set
- File: `7-has_array_values.js`

### 8. Clean set

- Create a function `cleanSet` that returns formatted string from Set values
- File: `8-clean_set.js`

### 9. Map data structure

- Create a function `groceriesList` that returns a Map of groceries
- File: `9-groceries_list.js`

### 10. More map data structure

- Create a function `updateUniqueItems` that updates Map items with quantity 1
- File: `10-update_uniq_items.js`

### 11. Weak link data structure (Advanced)

- Export a WeakMap instance and a queryAPI function
- Implement endpoint query tracking
- File: `100-weak.js`

## Author

- **Name:** Gemechis Chala
- **GitHub:** [@venopyx](https://github.com/venopyx)

## License

This project is part of the ALX Software Engineering Program curriculum.
