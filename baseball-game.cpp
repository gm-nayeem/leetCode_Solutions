class Solution {
public:
    int calPoints(vector<string>& ops) {
        stack<int> st;
        
        for(auto u : ops)
        {
            if( u.size() > 1 ){
                st.push( stoi(u) );
            }
            else if( isdigit( u[0]) ){
                    st.push( u[0] - '0' );
            }
            else if( u[0] == '+' ){
                int x = -1, y = -1;
                
                if( !st.empty() ){
                    x = st.top();
                    st.pop();
                }
                if( !st.empty() ){
                    y = st.top();
                    st.pop();
                }

                if( y != -1 ){
                    st.push(y);
                    st.push(x);
                    st.push( x+y );
                }
                else if( x != -1 ){
                    st.push(x);
                }
            }

            else if( u[0] == 'D' ){
                if( !st.empty() ){
                    st.push( 2 * st.top() );
                }
            }

            else{
                 if( !st.empty() ) st.pop();
            } 
                        
        }
        
        long long res = 0;
        while( !st.empty() ){
            res += st.top();
            st.pop();
        }

        return res;
                
    }
};