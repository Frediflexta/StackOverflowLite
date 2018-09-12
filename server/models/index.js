import userTab from '../models/users';
import quesTab from '../models/questions';
import ansTab from '../models/answers';
import userval from './seeder/userval';
import ansval from './seeder/ansval';
import quesval from './seeder/quesval';

userTab();
setTimeout(quesTab, 500);
setTimeout(ansTab, 1000);
setTimeout(userval,1500);
setTimeout(quesval, 2000);
setTimeout(ansval, 2500);

console.log('Setting Up Database...');
