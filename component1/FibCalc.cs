using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace winrtComponentNS
{
    public sealed class FibCalculator
    {
        int _a;
        // Just an example for non default constructor. It is called from JS.
        public FibCalculator(int a)
        {
            _a = a;
        }

        public int Fib(int n) 
        {
            if (n <= 1)
            {
                return n;
            }
            else
            {
                return Fib(n - 1) + Fib(n - 2);
            }
        }
    }
}
