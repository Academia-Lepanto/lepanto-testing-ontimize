package com.lepanto.testing.model.core.service;


import java.sql.Timestamp;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.lepanto.testing.api.core.service.IQuestionService;
import com.lepanto.testing.model.core.dao.QuestionDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.lepanto.testing.api.core.service.IUserService;
import com.lepanto.testing.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;


@Lazy
@Service("QuestionService")
public class QuestionService implements IQuestionService {

    @Autowired
    private QuestionDao questionDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    public EntityResult questionQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(questionDao, keyMap, attrList);
    }

    public EntityResult questionInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(questionDao, attrMap);
    }

    public EntityResult questionUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(questionDao, attrMap, keyMap);
    }

    public EntityResult questionDelete(Map<?, ?> keyMap) {
        Map<Object, Object> attrMap = new HashMap<>();
        //attrMap.put("user_down_date", new Timestamp(Calendar.getInstance().getTimeInMillis()));
        return this.daoHelper.update(this.questionDao, attrMap, keyMap);
    }

}
