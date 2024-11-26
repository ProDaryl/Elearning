import React from "react";

const PseudoCodeSection: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Pseudo-code: A Beginner's Guide</h1>

      {/* Section 1: What is Pseudo-code? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is Pseudo-code?</h2>
        <p className="mb-4">
          Pseudo-code is a high-level description of an algorithm written in plain language. 
          It abstracts away programming language syntax to focus on logic.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
          {`Algorithm AddTwoNumbers
Input: Two numbers A and B
Output: Their sum
Begin
    Result = A + B
    Print "The sum is", Result
End`}
        </pre>
      </section>

      {/* Section 2: Why Use Pseudo-code? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Use Pseudo-code?</h2>
        <p className="mb-4">
          Pseudo-code helps visualize the algorithm's logic without being tied to a specific programming language. 
          It simplifies planning and problem-solving.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
          {`Algorithm FindLargestNumber
Input: Three numbers X, Y, Z
Output: The largest of the three
Begin
    If X > Y And X > Z Then
        Print "X is the largest"
    Else If Y > Z Then
        Print "Y is the largest"
    Else
        Print "Z is the largest"
    End If
End`}
        </pre>
      </section>

      {/* Section 3: Structure of Pseudo-code */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Structure of Pseudo-code</h2>
        <p className="mb-4">
          Pseudo-code typically includes an algorithm name, inputs, outputs, logic, and an indication of where 
          the algorithm begins and ends.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
          {`Algorithm ExampleStructure
Input: A number N
Output: The square of N
Begin
    Square = N * N
    Print "The square is:", Square
End`}
        </pre>
      </section>

      {/* Section 4: Common Keywords */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Keywords</h2>
        <p className="mb-4">
          Key reserved words used in pseudo-code to describe operations or logic, such as 
          <code className="bg-gray-200 px-1 rounded">Begin</code>, 
          <code className="bg-gray-200 px-1 rounded">End</code>, 
          <code className="bg-gray-200 px-1 rounded">If</code>, 
          <code className="bg-gray-200 px-1 rounded">Else</code>, 
          <code className="bg-gray-200 px-1 rounded">For</code>, 
          <code className="bg-gray-200 px-1 rounded">While</code>, and 
          <code className="bg-gray-200 px-1 rounded">Input</code>.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
          {`Algorithm KeywordsExample
Input: A number A
Output: Prints A if it's positive
Begin
    If A > 0 Then
        Print "A is positive"
    Else
        Print "A is not positive"
    End If
End`}
        </pre>
      </section>

      {/* Section 5: Best Practices */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices for Writing Pseudo-code</h2>
        <p className="mb-4">
          Write in simple and clear language, use logical flow, comment on complex steps, 
          and ensure the pseudo-code is testable by manually following its logic.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
          {`Algorithm BestPractice
Input: None
Output: A message about good pseudo-code
Begin
    Print "Use clear and logical statements in your pseudo-code."
    Print "Comment steps to make them understandable."
    Print "Test your pseudo-code to ensure correctness."
End`}
        </pre>
      </section>

      {/* Section 6: Iterative Structures */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Iterative Structures</h2>
        <p className="mb-4">
          Loops execute a block of code multiple times, such as <code className="bg-gray-200 px-1 rounded">For</code> 
          loops for fixed repetitions or <code className="bg-gray-200 px-1 rounded">While</code> loops for conditions.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
          {`Algorithm PrintNumbers
Input: A number N
Output: Prints numbers from 1 to N
Begin
    For i = 1 to N
        Print i
    End For
End`}
        </pre>
      </section>

      {/* Section 7: Recursion */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Recursion</h2>
        <p className="mb-4">
          Recursion is when a function calls itself to solve smaller instances of the same problem.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
          {`Algorithm Fibonacci
Input: A number N
Output: The Nth Fibonacci number
Begin
    If N <= 1 Then
        Return N
    Else
        Return Fibonacci(N-1) + Fibonacci(N-2)
    End If
End`}
        </pre>
      </section>
    </div>
  );
};

export default PseudoCodeSection;
