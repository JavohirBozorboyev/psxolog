import Link from "next/link";

const QuizCartHome = ({ quizCategory }) => {
  return (
    <div>
      <div className="container mx-auto py-2 px-3 md:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {quizCategory
            .filter((fil) => fil.parent === null)
            .map((item) => {
              return (
                <Link
                  key={item.id}
                  href={`/quiz/${item.slug}`}
                  className="overflow-hidden rounded-md bg-gradient-to-tr from-slate-700 to-slate-500 p-4 lg:p-12"
                >
                  <div className="flex items-center text-blue-100">
                    <p className="text-sm font-bold uppercase secondText">
                      {item.slug.slice(0, 10)}...
                    </p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>

                  <h2 className="mt-4 text-xl titleText font-semibold text-slate-100">
                    {item.name.slice(0, 30)}...
                  </h2>

                  <p className="mt-4 text-base text-slate-200 secondText">
                    {item.body.slice(0, 60)}...
                  </p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default QuizCartHome;
