import FeedbackCard from "./feedback-card";
import { feedbacks } from '@/commons/data/feedbacks';

export default function Feedbacks() {
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-auto-rows-min grid-flow-dense gap-8 justify-center">
      {feedbacks.map((feedback, i) => (
        <FeedbackCard
          key={feedback.author} 
          author={feedback.author} 
          text={feedback.text} 
          avatarSrc={feedback.avatarSrc}
          rating={feedback.rating}
          animationIndex={i}
        />
      ))}
    </div>
  )
}