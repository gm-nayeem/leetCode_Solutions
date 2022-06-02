class Solution {
public:
    string removeDuplicates(string s) {
        stack<char> st;
        
        for(auto u : s ){
            if( st.empty() ) st.push(u);
            else{
                if( st.top() != u ) st.push(u);
                else{
                    if( st.top() == u ){
                        st.pop();
                    }
                }
            }
        }
        
        string str;
        while( !st.empty() ){
            str = st.top() + str;
            st.pop();
        }
        return str;
    }
};