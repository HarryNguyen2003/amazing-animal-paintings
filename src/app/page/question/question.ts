import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormArray, Validators } from '@angular/forms'
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-question',
  imports: [ReactiveFormsModule,TextareaModule,CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css'
})
export class QuestionComponent {
  formCreateFormQuestion: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formCreateFormQuestion = this.fb.group({
      // éo nên ép khải báo questions là 
      questions: this.fb.array([])
    })

    this.createQuestionItem()
  }

  // t tạo 1 getter để lấy ra thằng formArray questions từ formCreateFormQuestion
  get questions(): FormArray {

    // éo thể truy cập từ this vì thằng questions éo phải là một biến class cx éo phải thuộc tính mặc định nó chỉ là 1 key trong form
    // Thêm "as FormArray" dùng để ép kiểu cho thằng này thành FormArray để dùng push(),....
    return this.formCreateFormQuestion.get('questions') as FormArray;
  }


  createQuestionItem() {
    const question = this.fb.group({
      question: ['', Validators.required],
      answerA: ['', Validators.required],
      answerB: ['', Validators.required],
      answerC: ['', Validators.required],
      answerD: ['', Validators.required]
    });

    this.questions.push(question);
  }


  // remove theo index nhe
  removeQuestion(index: number) {
    this.questions.removeAt(index)
  }

  onSubmit() {
    if (this.formCreateFormQuestion.valid) {
      console.log('Form Question', this.formCreateFormQuestion.value)
    }
  }

}
