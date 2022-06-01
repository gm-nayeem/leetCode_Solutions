class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        
        set<int> uniq;
        for(int u : nums) uniq.insert(u);
        
        if( uniq.size() == nums.size() ) return false;
        else return true;
       
    }
};